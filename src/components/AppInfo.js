import React from 'react';
import { Panel, PanelHeader, Group, Div } from '@vkontakte/vkui';

import { Icon20AdvertisingOutline } from '@vkontakte/icons';
import "../App.css";

export const AppInfo = () => (
    <Group>
        <PanelHeader>Irregular Verbs</PanelHeader>
        <Div className='header-content'>
            <Icon20AdvertisingOutline width={30} height={30}/>
            <h3 className='header-content__h3'>Неправильные глаголы</h3>
        </Div>
    </Group>
    
);

