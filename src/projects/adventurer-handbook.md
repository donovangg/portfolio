---
title: Adventurer Handbook
stack: NextJS - Chakra UI - Supabase
slug: adventurer-handbook
date: 2021-12-25T00:00:00+00:00
thumb: ../images/handbook.png
repo: https://github.com/donovangomez/adventurer-handbook
link: https://adventurerhandbook-alpha.netlify.app/
category: project
description: A fullstack web app dedicated to daily tasks in the video game Genshin Impact. Characters and weapons are stored on Supabase's postgres database. Once the data is retrieved it is rendered by the current day of the week to display the characters that are able to level up. There is CRUD functionality with the Todolist so players can plan out their session.
---

## Project Explanation
Adventurer Handbook is an idea for a web app to be able to make an efficient game session in Genshin Impact. The goal with this site was to plan your Genshin session with the characters that you can farm for and burn resin efficiently.

## Tech Stack Choices
One of the largest things that might stick out is my choice to use Supabase on the backend. Supabase is a open source Firebase alternative with a postgres database. Supabase also has authentication built in. Firebase has auth with logging into a Google account but with Supabase you can authenticate with Discord and Twitter including a Google account.

## Some Difficulties 
There isn't a widely available Genshin Impact API. I have actually contributed to one in the past but it hasn't been updated for a few patches as of writing. This was the reason why I used Supabase, was to create a list of the characters and an array of farmable days. I was hoping by the tie of finishing the project the API would be updated so I can create some dynamic routes for the characters section. At this point my choice would be adding more info to each character myself which would be some time consuming work. I've learned that creating a solo project is more than just coding. It involves planning, getting assets and other stuff that doesn't involve writing a single line of code.