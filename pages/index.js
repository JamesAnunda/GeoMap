import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/layout';

export default function Index() {
    return (
        <div> {/* /* for the navbar */ }
            <Layout /> 
                <head>
                    <title>Home</title>
                </head>
            <h1>Welcome to GeoHeart</h1>
            <p>GeoHeatMap or GHM is an app that can trace heat signature through IoT devices and display geogrpahic location.</p>
        </div>

    );
  }