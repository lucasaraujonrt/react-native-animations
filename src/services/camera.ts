/* eslint-disable @typescript-eslint/no-unused-vars */
import { Alert, PermissionsAndroid } from 'react-native';
import I18n from '@mobile/i18n';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
  CameraOptions,
} from 'react-native-image-picker';

const cameraOptions: CameraOptions = {
  quality: 1,
  maxWidth: 1980,
  maxHeight: 1080,
  includeBase64: true,
  mediaType: 'photo',
};

const requestCameraPermission = async () => {
  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
};

const PickerPhoto = () => {
  let cameraPhoto = null;
  let libraryPhoto = null;

  Alert.alert(
    I18n.t('SERVICES.CAMERA.PHOTO'),
    I18n.t('SERVICES.CAMERA.SELECT_OPTIONS'),
    [
      {
        text: I18n.t('SERVICES.CAMERA.PICK_CAMERA'),
        onPress: () => {
          launchCamera(cameraOptions, (response: ImagePickerResponse) => {
            if (response.errorMessage) {
              return requestCameraPermission();
            }
            if (response.didCancel) {
              return;
            }
            cameraPhoto = `data:image/png;base64,${
              response &&
              response.assets &&
              response.assets[0] &&
              response.assets[0].base64
            }`;
            return cameraPhoto;
          });
        },
      },
      {
        text: I18n.t('SERVICES.CAMERA.PICK_LIBRARY'),
        onPress: () => {
          launchImageLibrary(cameraOptions, (response) => {
            if (response.errorMessage) {
              return requestCameraPermission();
            }
            if (response.didCancel) {
              return;
            }
            libraryPhoto = `data:image/png;base64,${
              response &&
              response.assets &&
              response.assets[0] &&
              response.assets[0].base64
            }`;
            return libraryPhoto;
          });
        },
      },
    ],
    { cancelable: true, onDismiss: () => {} }
  );
};

export default PickerPhoto;
