import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import tabsStyles from "./tabs.module.css";


const TabsVertical = () => (
    <Tabs className={tabsStyles.tabs}>
       <TabList className={tabsStyles.tabsList}>
           <Tab className={tabsStyles.tabsList__item}>
             <a href="#tab1" className={tabsStyles.tabsList__itemLink} >Profile</a>
           </Tab>

           <Tab className={tabsStyles.tabsList__item}>
             <a href="#tab2" className={tabsStyles.tabsList__itemLink} >Experience</a>
           </Tab>

           <Tab className={tabsStyles.tabsList__item}>
             <a href="#tab3" className={tabsStyles.tabsList__itemLink} >Personality</a>
           </Tab>
       </TabList>

       <TabPanel>
         <div className={tabsStyles.tabsText}>
           <p>Text 1</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
         </div>
         <div className={tabsStyles.tabsImg}><img src='https://source.unsplash.com/random#500x1000' alt="tab show"></img></div>
       </TabPanel>

       <TabPanel>
         <div className={tabsStyles.tabsText}>
           <p>Text 2</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
         </div>
         <div className={tabsStyles.tabsImg}><img src='https://source.unsplash.com/random#500x1000' alt="tab show"></img></div>
       </TabPanel>

       <TabPanel>
         <div className={tabsStyles.tabsText}>
           <p>Text 3</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
         </div>
         <div className={tabsStyles.tabsImg}><img src='https://source.unsplash.com/random#500x1000' alt="tab show"></img></div>
       </TabPanel>


    </Tabs>
)

export default TabsVertical;