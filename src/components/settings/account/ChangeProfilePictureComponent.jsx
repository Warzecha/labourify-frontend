import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import UserAvatar from '../../user/UserAvatar';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {useDispatch} from 'react-redux';
import {modifyProfileAction} from '../../../redux/actions/settingsActions';


const imageMaxSize = 20000000; // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
    return item.trim();
});

const initialCrop = {
    aspect: 1,
    minWidth: 300,
    minHeight: 300
};

const ChangeProfilePictureComponent = (props) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);
    const [crop, setCrop] = useState(initialCrop);
    const [pixelCrop, setPixelCrop] = useState(null);

    const dispatch = useDispatch();

    const verifyFile = (files) => {
        if (files && files.length > 0) {

            if (files.length > 1) {
                alert('You can only upload one file');
                return false;
            }

            const currentFile = files[0];
            const currentFileType = currentFile.type;
            const currentFileSize = currentFile.size;
            if (currentFileSize > imageMaxSize) {
                alert("This file is not allowed. " + currentFileSize + " bytes is too large");
                return false;
            }
            if (!acceptedFileTypesArray.includes(currentFileType)) {
                alert("This file is not allowed. Only images are allowed.");
                return false;
            }
            return true;
        }
    };


    const handleOnDrop = (files) => {
        if (files && files.length > 0) {
            const isVerified = verifyFile(files);
            if (isVerified) {
                const currentFile = files[0];
                const myFileItemReader = new FileReader();
                myFileItemReader.addEventListener("load", () => {
                    const result = myFileItemReader.result;
                    setImgSrc(result);
                });
                myFileItemReader.readAsDataURL(currentFile);
            }
        }
    };


    const getCroppedImg = (imageData, crop) => {
        const canvas = document.createElement('canvas');
        const image = new Image();
        image.src = imageData;
        return new Promise((resolve, reject) => {

            try {
                image.onload = () => {
                    const cropWidth = image.width * crop.width / 100;
                    const cropHeight = image.height * crop.height / 100;
                    const cropX = image.width * crop.x / 100;
                    const cropY = image.width * crop.y / 100;

                    canvas.width = cropWidth;
                    canvas.height = cropHeight;
                    const ctx = canvas.getContext('2d');

                    ctx.drawImage(
                        image,
                        cropX,
                        cropY,
                        cropWidth,
                        cropHeight,
                        0,
                        0,
                        cropWidth,
                        cropHeight,
                    );

                    const base64Image = canvas.toDataURL('image/jpeg');
                    resolve(base64Image);
                };
            } catch (e) {
                reject(e);
            }
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        getCroppedImg(imgSrc, pixelCrop)
            .then(pic => {
                console.log('cropped pic: ', pic);
                // setImgSrc(pic);

                dispatch(modifyProfileAction({image: pic}));

            })
            .then(() => {
                setModalOpen(false);
            })
            .catch(e => {
                console.log(e.message);
                alert(e.message);
            });
    };

    const styles = useStyles();

    return (
        <div className={styles.centeredColumn}>
            <Typography className={styles.sectionHeading}>Profile picture</Typography>
            <UserAvatar user={props.user}/>
            <Button onClick={() => setModalOpen(true)} variant={'text'} color={'primary'}>
                Change profile picture
            </Button>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                className={styles.modal}
            >
                <Paper className={styles.paper}>

                    {
                        imgSrc ?
                            <div className={styles.column}>

                                <ReactCrop src={imgSrc}
                                           crop={crop}
                                           onComplete={(e, crop) => {
                                               console.log('On Complete', e);
                                               console.log('Crop', crop);
                                               setPixelCrop(crop);
                                           }}
                                           onChange={setCrop}
                                           imageStyle={{height: 400, width: 'auto'}}

                                />

                                <div className={styles.buttonRow}>
                                    <Button color={'secondary'}
                                            onClick={() => setImgSrc(null)}>
                                        Cancel
                                    </Button>

                                    <Button color={'primary'}
                                            disabled={!pixelCrop}
                                            onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </div>

                            </div>
                            :
                            <Dropzone onDrop={handleOnDrop}>
                                {({getRootProps, getInputProps}) => (
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div className={styles.dropzone}>
                                            <Typography>
                                                Drop image here, or click to select an image
                                            </Typography>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                    }

                </Paper>
            </Modal>


        </div>
    );
};


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        boxShadow: theme.shadows[5],
        padding: 20,
        maxWidth: '90%',
        maxHeight: '90%'
    },
    sectionHeading: {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginTop: 30,
        marginBottom: 10,

    },
    centeredColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20
    },
    dropzone: {
        width: '100%',
        height: 100,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

}));

export default ChangeProfilePictureComponent;
