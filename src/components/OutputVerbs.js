import React from "react";
import { Group, InfoRow, List, SimpleCell } from "@vkontakte/vkui";

export const OutputVerbs = ({form2, form3, translate}) => (
    <>
        <Group>
            <List>
                <SimpleCell><InfoRow header="2 форма">{form2}</InfoRow></SimpleCell>
                <SimpleCell><InfoRow header="3 форма">{form3}</InfoRow></SimpleCell>
                <SimpleCell><InfoRow header="перевод">{translate}</InfoRow></SimpleCell>
            </List>
        </Group>
    </>
);