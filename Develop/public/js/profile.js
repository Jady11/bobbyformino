const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#gif-name').value.trim();
  const team = document.querySelector('#team-name').value.trim();

  if (name && description && content) {
    const response = await fetch(`/api/teams`, {
      method: 'POST',
      body: JSON.stringify({ team, description, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to upload gif');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/teams/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete gif');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
