# Moment share connect

## Overview
**"Moment share connect"** is a React JS web application designed to facilitate event photo and video management. It enables event organizers to efficiently handle media submissions from guests during events and provides a user-friendly interface for accessing and downloading event photos and videos post-event.

## Features
* ### Admin User Management:

  * Admins can create user accounts for event organizers.
  * User verification is handled through email.

* ###  Automatic Bucket Creation:

  * Upon user creation, a storage bucket is automatically generated for the event organizer.

* ### QR Code Generation:

  * Unique QR codes are generated for each event bucket.
  * QR codes link directly to the event photo/video submission page.
* ### Guest Photo/Video Submission:

  * Guests can scan QR codes to access the submission page.
  * They can take photos or upload media directly from their devices.
* ### Post-Event Gallery Access:

  * Event organizers can log in to the web app to access event galleries.
  * Each event bucket has a dedicated gallery displaying all submitted photos and videos.
* ### Photo Selection and Download:

  * Organizers can select and download specific media from the gallery.
* ### Gallery Features:

  * Media items in the gallery support features like slideshow, zoom, and download.
## Technology Stack
* Frontend: React JS
* Database: Supabase (PostgreSQL)
* Storage: Supabase Storage
## Setup
1.  Clone the repository.
2.  Install dependencies: npm install.
3. Configure Supabase credentials.
4.  Run the application: npm run dev.
## Usage
1. Admin creates user accounts for event organizers.
2. Upon user creation, a storage bucket is automatically created.
3. Admin generates QR codes for each event bucket.
4. Guests scan QR codes to submit photos/videos during the event.
5. After the event, organizers log in to access event galleries.
6. Organizers can select and download photos/videos from the gallery.


## Contributors
[Drilon Saiti](https://drilonsaiti.github.io/)
