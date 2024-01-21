'use client'
import Lightbox from "yet-another-react-lightbox";
import styles from './Carousel.module.css';
import "yet-another-react-lightbox/styles.css";

import image1 from "../../../public/img/20240107_153916-min.jpg";
import image2 from "../../../public/img/20240107_153923-min.jpg";
import image3 from "../../../public/img/20240107_153927-min.jpg";
import image4 from "../../../public/img/20240107_153934-min.jpg";
import React from "react";
import { Box, Button } from "@mui/material";


export default function FacilityCarousel() {
    const [basicExampleOpen, setBasicExampleOpen] = React.useState(false);
    const onClick = () => setBasicExampleOpen(true);
    const images = [image1, image2, image3, image4];
    return (
        <div className={styles.container}>
            <Lightbox
                slides={images}
                open={basicExampleOpen}
                close={() => setBasicExampleOpen(false)}
            />
            <Box sx={{ mb: 2 }}>
                <Button variant="contained" onClick={onClick}>
                   View facility
                </Button>
            </Box>
        </div>
    );
}