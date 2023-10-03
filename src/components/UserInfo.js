import React from "react";
import { Panel, Group, Div, Header, Cell, Avatar } from "@vkontakte/vkui";

export const UserInfo = ({fetchedUser}) => (
    <>
        {fetchedUser ? 
            <Group header={<Header mode="secondary">Данные пользователя</Header>}>
                <Cell before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}>
                    {`${fetchedUser.first_name} ${fetchedUser.last_name} ${fetchedUser.bdate ? fetchedUser.bdate : ""}`}
                </Cell>
            </Group>
        : ""
        }
    </>
);