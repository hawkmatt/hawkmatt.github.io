const token =
    location.hash.substring(1);

const manifest =
    await fetch("/data/manifest.json")
      .then(r => r.json());

const fileId =
    manifest[token];

const encrypted =
    await fetch(
      `/data/${fileId}.json`
    ).then(r => r.json());

deriveKey(token);

decrypt();

display();
