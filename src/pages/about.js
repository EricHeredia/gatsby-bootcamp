import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutMe = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I'm currently taking a bootcamp for Gatsby.js!</p>
      <p>If interested in my work. Feel free to <Link to="/contact">Contact Me</Link>!</p>
    </Layout>
  )
}

export default AboutMe