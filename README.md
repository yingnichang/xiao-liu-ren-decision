# Xiao Liu Ren Decision Timing

A small Progressive Web App for Xiao Liu Ren decision timing. It calculates the six-palace result from lunar month, lunar day, and Chinese hour branch, then customizes the answer based on the question topic.

Live app: https://xiao-liu-ren-decision.pages.dev

## Features

- Auto lunar date detection with manual month/day override
- Chinese hour branch mapping
- Six-palace Xiao Liu Ren counting path
- Question-aware answers for wealth, relationship, career, health, travel/person, lost item, spiritual, and general questions
- PWA manifest, service worker, and home-screen icons

## Cloudflare Pages

This is a static app. To connect it to Cloudflare Pages from GitHub:

1. Create or select the GitHub repository.
2. In Cloudflare, open Workers & Pages.
3. Connect the GitHub repository.
4. Use no build command.
5. Use `/` as the output directory if prompted.

The current production deployment is already live at:

https://xiao-liu-ren-decision.pages.dev
