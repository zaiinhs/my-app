import React from 'react'
import Layout from '../components/layout'

const BlogPage = () => {
    return (
        <Layout>
            <h1 className="judul-blog">Ini adalah Blog Pribadi saya.</h1>
            <h3>kunjungi :</h3>
            <p><a href="https://www.merdeka.com/trending/manfaat-kopi-tanpa-gula-untuk-kesehatan-si-pahit-yang-memaniskan-kln.html" target="_blank" rel="noreferrer">Kopi Pahit.</a></p>
            <p><a href="https://majalah.ottencoffee.co.id/resep-kopi-es-kopi-susu-aren/" target="_blank" rel="noreferrer">Kopi Susu.</a></p>
            <p><a href="https://coffeeland.co.id/membuat-kopi-tubruk-kopi-khas-indonesia/" target="_blank" rel="noreferrer">Kopi Tubruk.</a></p>
        </Layout>
    )
}
export default BlogPage