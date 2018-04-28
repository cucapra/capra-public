---
title: "Raw Photo Dataset"
layout: layout.html
---
# RAW Photo Dataset Collection

We're collecting a computer vision dataset consisting of [raw image files][raw]. This dataset will facilitate future research on co-design between imaging hardware and computer vision.

[raw]: https://en.wikipedia.org/wiki/Raw_image_format

## Raw Camera App

Modern Android and iOS smartphones can optionally capture raw images.
We have an Android app that lets you shoot raw photos and uploads them to our server for inclusion in our dataset.
You can help us build the dataset by installing the app and taking pictures.
(If you do this, please be aware that images captured inside the app---but not your other photos---will be sent to our server.)

### Installation

Here's a [video of the installation process][video].
Roughly, follow these steps:

1. On your device, follow [this Google Drive link][app] and download the app: <https://goo.gl/pWKuvk>
2. Enable the setting to allow installation of unknown apps from Google Drive when prompted.
3. Leave the settings screen and click "Install."

[video]: https://drive.google.com/file/d/1Vvr0k4OPswNqvBzVOonvHNqX7ucjTDZd/view
[app]: https://drive.google.com/file/d/1ZcqcnLtVCP5y1nJJEfHycrGvImytLz8-/view

### Usage

Just take pictures as usual. The app displays some category suggestions; if you can, please follow those. Please don't spam us.

The app only uploads photos when a Wi-Fi connection is available.
It uploads photos in a "burst," so you may notice lots of bandwidth use all at once if you queue up many photos.

The app deletes the very large raw image files from your photo album after uploading.

### Source Code

The source for the camera app is available [on GitHub][gh].
It is based on the open-source [Open Camera][oc] project, with modifications by [Po-Hsun (Evan) Su][phs].

[gh]: https://github.com/cucapra/CapraRawCamera
[oc]: https://sourceforge.net/projects/opencamera/
[phs]: https://github.com/Po-Hsun-Su
