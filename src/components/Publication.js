import {publicationStyle, paperStyle} from "./constants";
import Paper from "@mui/material/Paper";
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from "react";


export const Publication = () => {
    return (
        <Grid item>
            <div
                style={paperStyle}
            >
                <Paper elevation={0} square={true}>
                    <h3 style={paperStyle.label}>Publication</h3>
                    <div style={publicationStyle}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div >
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <Typography sx={publicationStyle.title}>Global-Local Modeling with Prompt-Based Knowledge Enhencement for Emotion Inference in Conversation</Typography>
                                        <Typography sx={publicationStyle.year}>Submitted to EACL 2022</Typography>
                                    </div>
                                    <Typography sx={publicationStyle.author}>Renxi Wang*, Shi Feng</Typography>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={publicationStyle.detail}>
                                    The ability to recognize emotions in conversations is necessary and important for the online chatbot to do tasks such as empathetic response generation and emotional support. Present researches mainly focus on recognizing emotions through a speaker's utterance, while research on emotion inference predicts emotions of addressees through previous utterances. Because of the lack of the addressee's utterance, emotion inference is more challenging than emotion recognition. In this paper, we propose a global-local modeling method based on recurrent neural networks (RNN) and pre-trained language models (PLM) to do emotion inference, which utilizes the sequence modeling ability of RNNs and abundant knowledge from PLMs. Moreover, we take the whole dialogue history as input of PLM to generate knowledge by in-context learning. Experimental results show that our model with knoledge enhancement achieves state-of-the-art performance on all three datasets.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        {/*<p style={{margin: 0}}>&nbsp;</p>*/}
                    </div>
                </Paper>
            </div>
        </Grid>
    )
}