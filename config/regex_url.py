###
### regexs for urls
###
import re

ignored_get_req = [
    re.compile(r".*\.(svg|png|jpg|jpeg|ico|gif|css|js|ttf)($|\?.)", re.IGNORECASE),
    re.compile(r"^counter\.yadro\.ru.*", re.IGNORECASE),
    re.compile(r".*doubleclick\.net.*", re.IGNORECASE),
    re.compile(r"^top-fwz1\.mail\.ru/(counter|tracker)\?.*", re.IGNORECASE),
    re.compile(r"^ad\.mail\.ru.*", re.IGNORECASE),
    re.compile(r"^google\..*?/ads/.*", re.IGNORECASE),
    re.compile(r"^mycdn\.me/getImage\?photoId=.*", re.IGNORECASE),
]
