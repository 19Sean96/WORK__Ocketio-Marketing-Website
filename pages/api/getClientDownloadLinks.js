async function getManagedDeviceDownloadLinks() {
  const downloadManifest = await fetch(
    `${process.env.MANAGED_DEVICE_DOWNLOAD_URL}/manifest.json`
  );
  const data = await downloadManifest.json();
  return data;
}

async function assembleLinks(osList, supervisedLinks) {
  const managedDevices = await getManagedDeviceDownloadLinks();
  console.log(managedDevices.windows.x64)
  let arr = []
  osList.map((os) => {
    if (managedDevices[os]) {
      arr.push({
        os,
        link: `${process.env.MANAGED_DEVICE_DOWNLOAD_URL}/${os}/${
          Object.keys(managedDevices[os])[0]
        }/${managedDevices[os].x64.latest.name}`,
        type: "managed",
        version: managedDevices[os].x64.latest.version,
        size: managedDevices[os].x64.latest.size
      });
    } else {
      arr.push({ 
        os,
        link: supervisedLinks[os],
        type: "supervised",
      });
    }
  });

  return arr
}

export default async function handler(req, res) {

    let osList = [
            "android", 
            "ios", 
            "macos", 
            "linux", 
            "windows"
        ],
        supervisedLinks = {
            android:
              "https://play.google.com/store/apps/details?id=com.wireguard.android",
            linux: "https://www.wireguard.com/install/",
            ios: "https://itunes.apple.com/us/app/wireguard/id1441195209?ls=1&mt=8",
            macos:
              "https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&amp;mt=12",
            windows: "https://www.wireguard.com/install/",
        }

    let downloadLinks = await assembleLinks(osList, supervisedLinks)

    res.json(downloadLinks)
}
