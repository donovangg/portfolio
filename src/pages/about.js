import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Grid, GridItem, Box, Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react"

export default function about() {
    return (
        <Layout>
            <Grid height="90vh" gridTemplateColumns="repeat(3, 1fr)" gap={6} border="2px">
                <Flex flexDir="column" justifyContent="center">
                    <Text>Yo I'm Donovan!</Text>
                    <Text>I'm a frontend developer born and raised in LA</Text>
                    <StaticImage src="../images/portfolio-pic.png" />
                </Flex>
                <Flex flexDir="column" justifyContent="center">
                    <Text>
                    Lorem Khaled Ipsum is a major key to success. They never said winning was easy. Some people can’t handle success, I can. Don’t ever play yourself. Stay focused. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. We don’t see them, we will never see them. Another one
                    </Text>
                    <Text>
                    Lorem Khaled Ipsum is a major key to success. They never said winning was easy. Some people can’t handle success, I can. Don’t ever play yourself. Stay focused. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. We don’t see them, we will never see them. Another one
                    </Text>
                </Flex>
                <Flex flexDir="column" justifyContent="center">
                    <Text>
                    We the best. Hammock talk come soon. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? The other day the grass was brown, now it’s green because I ain’t give up. Never surrender.
                    </Text>
                    <UnorderedList>
                        <ListItem>Tang Keke</ListItem>
                        <ListItem>Kanon Shibuya</ListItem>
                        <ListItem>Chisato Takoyaki</ListItem>
                    </UnorderedList>
                </Flex>
            </Grid>
        </Layout>
    )
}
