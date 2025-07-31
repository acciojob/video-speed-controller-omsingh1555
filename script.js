const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('[name="volume"]');
const playbackRate = document.querySelector('[name="playbackRate"]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚❚';
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
volume.addEventListener('input', handleRangeUpdate);
playbackRate.addEventListener('input', handleRangeUpdate);
skipButtons.forEach(button => button.addEventListener('click', skip));
video.addEventListener('timeupdate', handleProgress);

