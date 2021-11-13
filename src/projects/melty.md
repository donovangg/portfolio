---
title: Melty Blood Tournaments
stack: NextJS - Supabase - Chakra UI
slug: melty-tournaments
date: 2021-10-31T00:00:00+00:00
thumb: ../images/melty-tournaments-home.png
repo: https://github.com/donovangomez/melty-tournaments
link: https://melty-tournaments.vercel.app/
category: project
description: A web app built for Melty Blood players to find online tournaments. Players can authenticate with a third party and add their own tournaments. Supabase's Postgres is used on the back end to store tournaments.
---


# Table of Contents
1. [Project Purpose](#Project-Purpose)
2. [Tech Stack](#Tech-Stack)
3. [What I struggled with](#third-example)
4. [Lessons Learned and New Features?](#Lessons-Learned-and-New-Features)

## Project Purpose
A shiny new fighting game called Melty Blood Type Lumina has come out and one of the best parts about the game is that it has fantastic netcode. Throughout the first week I was able to play people close to me on the West Coast and played some friends in NYC and the connection was buttery smooth. Browsing Twitch looking for some Melty streams to watch I noticed a large amount of online tournaments that I didn't know about.

I asked a friend on Discord if he knows any tournaments and he gave me an idea to have a site for it. That way people don't have to be in certain Discords to know when something is going on.

## Tech Stack
Since I've been learning React in my journey to code I didn't feel a need to move to another framework. However, I did take this as a good time to learn NextJS. I previously used Gatsby to built my portfolio and It seems to have a reputation for static sites. I knew this needed some backend for storing tournaments and eventually results. I didn't know how at the time, but I just started coding with Next anyway. I was thinking of how I was going to store data for this website, I was thinking if this is a case for Strapi, but I was leaning towards firebase. I eventually learned about Supabase which has been pretty active on Twitter. I saw that there were unlimited API calls with the free plan and for someone that forgot the [], in my useEffect hook this was perfect. For styling the site I went with another one makin the rounds on Twitter Chakra UI. There we  have it, NextJS , Chakra UI and Supabase for tournament storage.

## What I struggled with
I have currently only have been studying Frontend Web development so I honestly didn't even know where to start on the backend, even with a BaaS. However after a few YouTube videos and reading the Supabase docs, it became relatively easy to setup the backend. I did not have to write a single SQL query since the GUI is so well done. However, implementing Security is something I struggled with and could use some improvements. In the end I chose to validate users with Google before they're able to insert stuff into the Tournament Table.

## Lessons Learned and New Features?
Having some experience with backend has been an awesome experience. I do eventually would like to learn more, for solo projects it feels limiting not knowing how to store data. I really do have to thank Supabase though for how easy it is to work with. I plan to implement a user input results page as well, I'm not really sure on how it should be implemented at the moment because at the moment it just lists a bunch of Top 8s. It's a step above nothing. Any suggestions please let me know :)