const photoLinks = 
[
'https://picsum.photos/id/500/500',
'https://picsum.photos/id/501/500',
'https://picsum.photos/id/502/500',
'https://picsum.photos/id/503/500',
'https://picsum.photos/id/504/500',
'https://picsum.photos/id/505/500',
'https://picsum.photos/id/506/500',
'https://picsum.photos/id/507/500',
'https://picsum.photos/id/508/500',
'https://picsum.photos/id/509/500',
'https://picsum.photos/id/510/500',
'https://picsum.photos/id/511/500',
'https://picsum.photos/id/512/500',
'https://picsum.photos/id/513/500',
'https://picsum.photos/id/514/500'
]

const photoTitles = 
[
'Фото 1',
'Фото 2',
'Фото 3',
'Фото 4',
'Фото 5',
'Фото 6',
'Фото 7',
'Фото 8',
'Фото 9',
'Фото 10',
'Фото 11',
'Фото 12',
'Фото 13',
'Фото 14',
'Фото 15'
]

const maxPhotos = 15;
const columns = 3;

function getPhotos(n) {
	if (n >= maxPhotos)
	{
		n = maxPhotos;
	}
	for (var i = 0; i < n; i++) 
	{
		if (i % columns == 0)
		{
			document.write(`<div class="row">`);
		}
		document.write(`<div class="col">`);
			document.write(`<img src="${photoLinks[i]}" title="${photoTitles[i]}" alt = "${photoTitles[i]}">`);
			document.write(`<p class="centered">${photoTitles[i]}</p>`)
		document.write(`</div>`);
		if (i % columns == columns - 1)
		{
			document.write(`</div>`);
		}
	}
}