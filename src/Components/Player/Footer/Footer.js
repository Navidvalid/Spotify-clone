import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
          className='footer__albumLogo'
          src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFAAUAMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgEDBAUHAv/EADIQAAEDAwIEAwYGAwAAAAAAAAEAAgMEBRESIQYxQVETImEjMnGRocEkUmKBseEUFRb/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAApEQEAAgIBAgMJAQEAAAAAAAAAARECAyESUSIxYQQTQXGBkaHB8NEU/9oADAMBAAIRAxEAPwDhqAg2/C7tN1af0lB0Bj9kFXOQRbi6ASQCUDdhygiCAgICAgINhY3+HcWH0KCfUzjJpawFznEAAbklBIP+aqWSNhqqiCnqHnDInOyXHtt16Kid+MTVJdMorxRb6ijMlNWRGOQDkQrcM4zi4cmKc8cNLiD0OFJxRAQEBAQX6J+iqjd6oJzQ1b4oXyRHEjYnFrs4wdPMeqjnFw7CVXKkkqrNb5rfSXB10gGp00D3PjkbnylpG3MjsRusuOeMTSyYavjCtluNPDUV8gdWxRtglaHZwRkkZ6kZGd9s4U9FxlPZzOnL6xumpf8AFaVaygICAgIKsOlwPYoJVbaj2bcHdBN7E6aC2Vs8VQ6OONhbPFGSdLTpGQM7c+nYrBn4s47S9Ld7NGnDpnnO4v0mb4+ccX86YEFh/wBnTyuhrYo4KcAY8M4bqdjvz236q731cUzzpxiemZmcu0Rf75n+tzy500rHmYscGbbkYIz3HRXxlEobfZtmuLmOP7zj4NepKBAQEBAQSKxVDWUziHtbK12wccau3y3PyVWyLmp8npexbY1a8sscojOJ4uavt9I5n1mkx4aqXyUtwpKZwJmg1ynGNhnUAfX7rNuiYqZatWfs8VsmbrmfOuuY+/wviOO8+S7STtp7BcHPZpLS5mQASzyuG3bmFyp95FKtmevOPFPTj2xr9XfpdfRz6sq6ZjTCylJj1ZOqTBcemcLX05TNzLL/ANGjHD3eGvj1nmfnVfjhiaqSaKT2PgPa3U1weSCe2Cu+KJ7oXo2Yz4emY9fww1NlEBAQEGRSSaHYQdJ4XtdRRRi5uljlo2QeJJ4YOdDwB92/VZN09fhjz/xoxyrX0z5Xf99vi3XFtXS3exmksrfxJaC+Ix6Hva3Tk77nAAH7rPoxy153n5I5cxw45VnL9+edwei9NSx0BAQEBAQVacHKCe8H8bR2a2PpKplTJs4R+EGnyncAlx/N9FRs09eVpRlUUpaeNI7Rbv8AHp7aZJnEl8r6jbB6Y0n069FzZo655kjKkQvFa64Vjql8bGPf72gYye/xV2OPTFOTNsFScEBAQEG3dwze2atdsqG6Rl2W40/Hsgstsd0eGltDNhxcG7e8WnDgO5B6INtauGpJWOFbFcY5o3hr44KcPwCGkZ3GDh39IFbYJGs00UNwdPkEMnhawFh2znO3m2HdBqxYrtLE2ZlDM6N7S5rgMggZyR8ig9jhu9EAi3T7jPLpjKDVOaWOLXAhwOCD0KCiAgIPXiP287tgQN+h5oKZPdB6MshGC9xHbPpj+EAyPIwXuI7ZQU8R+/ndvud+aD02aVgw2R7R2DiEFtAQEBAQEBAQEBAQEH//2Q=='
          alt=''
        />
        <div className='footer__songInfo'>
          <h4>Drake</h4>
          <p>Money In The Grave</p>
        </div>
      </div>

      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        {/* <PauseCircleOutlineIcon fontSize='large' className='footer__icon' /> */}
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />

        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
