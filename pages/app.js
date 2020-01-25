import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/layout';
import Radar from 'radar-sdk-js';
 
export default function app() {
    return (
        <div>
            <Layout />
            <h3>Google Map</h3>
            <div className='map' />
          <button onClick={initializeRadar} >Click here to test Radar Connection</button>
        </div>
    )

    function initializeRadar () {
        /* initialize Radar Connection */
        Radar.initialize('prj_test_pk_2bdadc849b1f66b25824b05c8b1cdd7ac4103681');
    
        Radar.setUserId('userId');
        // Radar.requestPermissions(true);
    
        Radar.trackOnce(function(status, location, user, events) {

            console.log('we\'re tracking!');
            if (status === Radar.STATUS.SUCCESS) {
              if (user.place.chain.slug === '') {
                // do something
                console.log('Connection made to API Servers');
    
              } else {
                Radar.on('error', (err) => {
                    // do something with err
                    console.log('TCant Connect to Radar! Contact Developer!');
                  });
              }
            } 
        });
    }
    
}
