import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div className={s.topPicture}>
                <img src='http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg' />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <div>Name: {props.profile.fullName}</div>
                <div>About: {props.profile.aboutMe}</div>
                <div>Job: {props.profile.lookingForAJobDescription}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;