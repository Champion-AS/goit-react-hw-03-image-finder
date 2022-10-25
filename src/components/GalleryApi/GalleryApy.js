import PropTypes from 'prop-types';

const params = {
    Adress: 'https://pixabay.com/api/',
    Key: '30101192-873c73f6b4dfe5f82ebfe07cf',
}

async function fetchImages(page, inputDate) {
    const { Adress, Key } = params;
    const options = new URLSearchParams({
        key: Key,
        page,
        q: inputDate,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: '12',
    });

    try {
        const response = await fetch(`${Adress}?${options}`);
        const parsed = await response.json();
        return parsed;
    } catch (err) {
        console.log(err.massage)
    }
}

fetchImages.propTypes = {
    page: PropTypes.number.isRequired,
    inputDate: PropTypes.string.isRequired,
}

export default fetchImages;
