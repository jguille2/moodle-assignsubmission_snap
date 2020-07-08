// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * This module handles the events of the frame container of the Snap! editor.
 *
 * @module     assignsubmission_snap/snap
 * @package    assignsubmission_snap
 * @copyright  2020 Sara Arjona <sara@moodle.com> Joan Guillén <jguille2@xtec.cat>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

export const toogleFullScreen = () => {
    if (!isFullScreen()) {
        enterFS();
    } else {
        exitFS();
    }
};

const isFullScreen = () => {
    return (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null) ||
        (document.mozFullScreen || document.webkitIsFullScreen);
};

const enterFS = () => {
    var cont = document.getElementById('snapContainer'),
        toggler = document.getElementById('togglingFSicon');
    if (cont.requestFullscreen) {
        cont.requestFullscreen();
    } else if (cont.mozRequestFullScreen) {
        cont.mozRequestFullScreen();
    } else if (cont.msRequestFullscreen) {
        cont.msRequestFullscreen();
    } else if (cont.webkitRequestFullScreen) {
        cont.webkitRequestFullScreen();
    }
    toggler.classList.remove('fa-expand');
    toggler.classList.add('fa-compress');
};

const exitFS = () => {
    var toggler = document.getElementById('togglingFSicon');
    toggler.classList.remove('fa-compress');
    toggler.classList.add('fa-expand');
    if (document.exitFullScreen) {
        document.exitFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
};
