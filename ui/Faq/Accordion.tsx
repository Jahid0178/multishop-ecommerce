import { Accordion } from '@mantine/core';
import React from 'react';

interface ComponentProps {
    accordionData: Array<{
        faqTitle: string,
        value: string,
        faqDescription: string,
    }>;

    styles: string;
}

const AccordionCompo: React.FC<ComponentProps> = ({ accordionData, styles }) => {
    return (
        <>
            <Accordion variant="separated">
                {accordionData?.map((data, index) => {
                    return (
                        <Accordion.Item key={index} className={styles} value={data.value} >
                            <Accordion.Control>{data.faqTitle}</Accordion.Control>
                            <Accordion.Panel>{data.faqDescription}</Accordion.Panel>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </>
    );
};

export default AccordionCompo;
