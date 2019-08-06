//Variables
const selection = figma.currentPage.selection;
const page = figma.currentPage;

if (selection.length > 0) {
	selection.forEach(item => {

		//check if parent is page node
		// if true, move to top of layer stack
		if (item.parent.type === 'PAGE') {
			page.appendChild(item);
		} else {
			let parent = item.parent;
			let xCoor = 0;
			let yCoor = 0;
			while (parent.type != 'PAGE') {
				xCoor += parent.x;
				yCoor += parent.y;
				parent = parent.parent;
			}

			item.x = item.x + xCoor;
			item.y = item.y + yCoor;
			page.appendChild(item);
		}
	});
	figma.closePlugin();
} else {
	figma.closePlugin('Please make a selection.');
}
