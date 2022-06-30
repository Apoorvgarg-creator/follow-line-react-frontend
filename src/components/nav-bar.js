import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Image from 'mui-image';
import logo from '../assets/logo.gif';
import {Box, Button, ButtonGroup, Divider, Input, TextField, Typography} from "@mui/material";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LaunchIcon from '@mui/icons-material/Launch';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import VrpanoOutlinedIcon from '@mui/icons-material/VrpanoOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import SaveIcon from '@mui/icons-material/Save';
export default function ProminentAppBar() {
    return (
        <AppBar position="static" sx={{marginBottom:3, marginTop: -1}}>
            {/*<List aria-label="nav bar">*/}
                <Toolbar sx={{ display: "flex", flexWrap: 'wrap', justifyContent:'space-between'}} >
                    <Box sx={{ display: "inline-flex", justifyContent:'space-between',alignItems: 'center'}}>
                    <Image src={logo} fit={"cover"}  width={50}></Image>
                    <ButtonGroup>
                        <Button startIcon={<ConnectingAirportsIcon/>} variant="contained" color={"success"} sx={{marginX:1 ,}} size={"small"}>Connected</Button>
                        <Button startIcon={<LaunchIcon/>} variant="contained" color={"secondary"} sx={{marginX:1 ,}} size={"small"}>Launch</Button>
                        <IconButton aria-label="helpCenter" sx={{marginX:1 ,}}>
                            <HelpCenterOutlinedIcon />
                        </IconButton>
                    </ButtonGroup>
                    </Box>
                    <Typography variant="h5">
                        Follow Line exercise
                    </Typography>
                    <ButtonGroup variant="outlined" color={"success"} aria-label="outlined button group">
                        <IconButton  aria-label="helpCenter">
                            <SchoolOutlinedIcon />
                        </IconButton>
                        <IconButton aria-label="helpCenter">
                            <CodeOutlinedIcon />
                        </IconButton>
                        <IconButton aria-label="helpCenter">
                            <CommentOutlinedIcon />
                        </IconButton>
                    </ButtonGroup>
                </Toolbar>
                <Divider color={"secondary"}  variant="middle" sx={{m:0.5,marginX:2,marginTop:-0.5}}/>
                <Toolbar sx={{ display: "flex", flexWrap: 'wrap' ,justifyContent:'space-between'}} >
                    <ButtonGroup>
                    <label htmlFor="contained-button-file" >
                            <Input accept=".py" id="contained-button-file" multiple type="file" sx ={{display : 'none'}}/>
                            <Button size={"medium"} variant="contained" color={"secondary"} component="span" startIcon={<CloudUploadOutlinedIcon/>} sx={{m:1}}>
                                Load file
                            </Button>
                        </label>
                        <Button size={"medium"} variant="contained" color={"secondary"} component="span" startIcon={<SaveIcon/>} sx ={{m:1}}>
                            Save file
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup size={"medium"} variant="outlined" color={"secondary"} sx ={{m:1}} disabled>
                        <Button   startIcon={<SmartToyOutlinedIcon/>} >
                            Load in robot
                        </Button>
                        <Button  startIcon={<PlayCircleOutlineOutlinedIcon/>} >
                            Play
                        </Button>
                        <Button startIcon={<RestartAltOutlinedIcon/>} >
                            reset
                        </Button>
                    </ButtonGroup>
                    <box>
                        <TextField
                            id="standard-number"
                            label="Brain Freq (Hz)"
                            type="number"
                            defaultValue={1}
                            size={"small"}
                            sx ={{width:160, m:1}}
                            inputProps={{ min: 0, max: 30,onKeyDown: (event) => {
                                    event.preventDefault();
                                },  }}
                            color = {"secondary"}
                        />
                        <TextField
                            id="standard-number"
                            label="GUI Freq (Hz)"
                            defaultValue={1}
                            type="number"
                            sx ={{width:160, m:1}}
                            inputProps={{  min: 0, max: 10 ,onKeyDown: (event) => {
                                    event.preventDefault();
                                },}}
                            size={"small"}
                            color = {"secondary"}
                        />
                        <TextField
                            id={"standard-read-only-input"}
                            defaultValue="Sim RTF: 0"
                            color = {"secondary"}
                            InputProps={{
                                readOnly: true,
                            }}
                            size={"small"}
                            sx ={{width:120, m:1}}

                        />
                    </box>
                    <Box sx={{ display: "flex", flexGrow: 1 ,flexWrap: 'wrap',justifyContent:'space-between',marginTop:-0.5}}>
                        <Button size={"medium"} variant="contained" color={"secondary"} component="span" sx ={{m:1}} startIcon={<VrpanoOutlinedIcon/>} >
                            View Sim
                        </Button>
                        <Button size={"medium"} variant="contained" color={"secondary"} component="span" sx ={{m:1}} startIcon={<TerminalOutlinedIcon/>} >
                            View Console
                        </Button>
                        <Button size={"medium"} variant="contained" color={"secondary"} component="span" sx ={{m:1}} startIcon={<VideogameAssetOutlinedIcon/>} >
                            Teleoperate
                        </Button>
                    </Box>
                </Toolbar>
            {/*</List>*/}
        </AppBar>
    );
}
