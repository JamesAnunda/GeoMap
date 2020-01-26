import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/layout';
import Radar from 'radar-sdk-js';
import GoogleMapReact from 'google-map-react';

<style jsx>{`
    .map {
        height: 50%;
        width: 50%;
        postion: absolute;
    }

`}

</style>

export default function app() {
    return (
        <div>
            <Layout />
            <h3>Google Map</h3>
          <button onClick={initializeRadar} >Click here to test Radar Connection</button>
        {/* Google React Map initalization and settings */}
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact className={Map}
                    defaultZoom={5}
                    defaultCenter={{ lat: 40.421, lng: -86.913 }}
                    bootstrapURLKeys={{ key: 'AIzaSyCd02tQvJwo6aO2GiXSU2d-Js51Oxw7hCI' }}
                ></GoogleMapReact>
            </div>
        </div>

    )

    /* Radar API initialization and settings */
    function initializeRadar () {
        /* initialize Radar Connection */
        Radar.initialize('prj_test_pk_2bdadc849b1f66b25824b05c8b1cdd7ac4103681');
    
        Radar.setUserId('userId');
        // Radar.requestPermissions(true);
    
        Radar.trackOnce(function(status, location, user, events) {

            console.log('we\'re tracking!');
            if (status === Radar.STATUS.SUCCESS) {
              if (user.place.chain.slug === 'Purdue') {
                // do something
                console.log('Connection made to API Servers');
              } else {
                Radar.on('error', (err) => {
                    // do something with err
                    console.log('Cant Connect to Radar! Contact Developers!');
                  });
              }
            } 
        });
    }
    
}