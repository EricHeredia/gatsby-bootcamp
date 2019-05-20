import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutMe = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm currently taking a bootcamp for Gatsby.js!</p>
      <p>If interested in my work. Feel free to <Link to="/contact">Contact Me</Link>!</p>
    </Layout>
  )
}

export default AboutMe