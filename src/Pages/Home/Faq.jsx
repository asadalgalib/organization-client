import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';


const Faq = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className='xl:px-20 lg:px-12 pb-12 lg:pb-20 md:px-10 px-4 grid grid-cols-1 items-start justify-center lg:grid-cols-2 xl:grid-cols-5 gap-5 lg:gap-10'>
            <div className='xl:col-span-2'>
                <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold text-black dark:text-white'>Most asked Questions</h1>
                <p className='text-black dark:text-white mt-2'>At Green Pulse, we believe in spreading awareness and providing clarity on environmental concerns. Here, you'll find answers to the most frequently asked questions about climate change, sustainability, and how you can make a difference. Explore the insights and take action for a greener future! </p>
            </div>
            <div className='col-span-3'>
                <Accordion
                className='dark:bg-[#0a0e15] dark:text-white text-black'
                    expanded={expanded}
                    onChange={handleExpansion}
                    slots={{ transition: Fade }}
                    slotProps={{ transition: { timeout: 400 } }}
                    sx={[
                        expanded
                            ? {
                                [`& .${accordionClasses.region}`]: {
                                    height: 'auto',
                                },
                                [`& .${accordionDetailsClasses.root}`]: {
                                    display: 'block',
                                },
                            }
                            : {
                                [`& .${accordionClasses.region}`]: {
                                    height: 0,
                                },
                                [`& .${accordionDetailsClasses.root}`]: {
                                    display: 'none',
                                },
                            },
                    ]}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='dark:text-white text-black' />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">🌿 What is the mission and vision of your organization?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Our mission is to raise awareness about climate change and inspire actionable solutions for a sustainable future. We envision a world where individuals and communities actively protect nature through informed decisions and responsible practices.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='dark:bg-[#0a0e15] dark:text-white text-black'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='dark:text-white text-black' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">🔄 What are some of the key projects you are currently working on?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        We are currently working on a platform that educates people about climate change, explains impactful environmental quotes, and promotes eco-friendly habits.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='dark:bg-[#0a0e15] dark:text-white text-black'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='dark:text-white text-black' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">🌱 How does your organization ensure long-term sustainability for its projects?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        We focus on community engagement, partnerships, and digital awareness campaigns to ensure our projects remain impactful and adaptable over time.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='dark:bg-[#0a0e15] dark:text-white text-black'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='dark:text-white text-black' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">💰 How is your organization funded?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Our organization is primarily funded through grants, donations, and collaborations with eco-conscious brands and organizations.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='dark:bg-[#0a0e15] dark:text-white text-black'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='dark:text-white text-black' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">🌎 What are your organization's goals for the next 5-10 years?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        We aim to expand our reach, develop interactive tools for climate education, and collaborate globally to drive meaningful environmental action.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;