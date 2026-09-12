import os
import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

certs = {
    "cert-1": "1JuwlKqtzve8w461fQ_V489hJimsb3cXU",
    "cert-2": "1YLVFti3Hg37Ubk33KQj77wmEB8J5fYIN",
    "cert-3": "1oNA-wzUaCWpdBLXk_LpN-WAS_ZeB_7HN",
    "cert-4": "14mP0ZMtiNHgxawcjOd4156u8FVsth6bh",
    "cert-5": "1S6PUEV-zonkdQuDZU-x5VR8lw7q9-atF",
    "cert-6": "1AAEmKsQvBD5drx8a7Hhc6ZSg6i-SLM8h",
    "cert-7": "1yoXPv4V3mjDqmNWHmjvfmJo9Xx4-YxYi",
    "cert-8": "1t1xKqQ472D2ohnB4BoDZzWsjAEgvUQLZ",
    "cert-9": "1V5VNKGXcSBfLvYWx2x3SeCFvLZJK6ch0",
    "cert-10": "18HTNIokHQVUdDSlBsjrW35ngd4p4ZtPh",
    "cert-11": "1HFBzk6sP2x3jcRKjgQUNt1tpi-mEbfKC",
}

os.makedirs("public/certificates", exist_ok=True)

for key, drive_id in certs.items():
    url = f"https://drive.google.com/thumbnail?id={drive_id}&sz=w800"
    print(f"Downloading {key} from {url}")
    try:
        urllib.request.urlretrieve(url, f"public/certificates/{key}.png")
    except Exception as e:
        print(f"Failed to download {key}: {e}")

print("Done!")
