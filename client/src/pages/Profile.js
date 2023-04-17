import PageContainer from "../containers/PageContainer";
import classes from "./Profile.module.css";

function Profile() {
  //TODO
  return (
    <PageContainer>
      <div className={classes.bannerContainer}>
        <img className={classes.bannerImage} src="./images/banner.jpg" alt="Banner" />
        <div className={classes.bannerTextContainer}>
          <h1 className={classes.bannerText}>Welcome to my profile page</h1>
        </div>
      </div>
      <div className={classes.profileContainer}>
        <div className={classes.profilePictureContainer}>
          <img
            className={classes.profilePicture}
            src="./images/profile-pic.png"
            alt="Profile Picture"
          />
        </div>
        <div className={classes.profileDetailsContainer}>
          <h1 className={classes.profileName}>Ricky Bobby</h1>
          <p className={classes.profileDetails}>Age: 35</p>
          <p className={classes.profileDetails}>Birthday: I don't have birthdays. I level up.</p>
          <p className={classes.profileDetails}>Favorite Game: NASCAR Heat 5</p>
          <div className={classes.favoriteGameContainer}>
    <img
      className={classes.favoriteGame}
      src="./images/Nascar_Heat_5_Cover_Art.jpg"
      alt="Favorite Game"
    />
  </div>
        </div>
        <div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Profile;
