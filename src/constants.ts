export type iconName = "camera" | "menu" | "arrowDown" | "arrowRight";

type icon = {
	path: string;
	viewBox: string;
};

const IconSet: Record<iconName, icon> = {
	camera: {
		path:
			"M11.1175 3C12.2379 3 13.265 3.62437 13.7808 4.61905L14.217 5.46032C14.3889 5.79188 14.7312 6 15.1047 6H15.4444C16.8558 6 18 7.14416 18 8.55556V14C18 15.6569 16.6569 17 15 17H5C3.34315 17 2 15.6569 2 14V8.55556C2 7.14416 3.14416 6 4.55556 6H4.89527C5.26875 6 5.61111 5.79188 5.78303 5.46032L6.21924 4.61905C6.735 3.62437 7.76206 3 8.8825 3H11.1175ZM11.1175 5H8.8825C8.50902 5 8.16667 5.20812 7.99475 5.53968L7.55854 6.38095C7.04278 7.37563 6.01571 8 4.89527 8H4.55556C4.24873 8 4 8.24873 4 8.55556V14C4 14.5523 4.44772 15 5 15H15C15.5523 15 16 14.5523 16 14V8.55556C16 8.24873 15.7513 8 15.4444 8H15.1047C13.9843 8 12.9572 7.37563 12.4415 6.38095L12.0052 5.53968C11.8333 5.20812 11.491 5 11.1175 5ZM10 8C11.6569 8 13 9.34315 13 11C13 12.6569 11.6569 14 10 14C8.34315 14 7 12.6569 7 11C7 9.34315 8.34315 8 10 8Z",
		viewBox: "0 0 20 20",
	},
	menu: {
		path:
			"M17 15a1 1 0 110 2H3a1 1 0 110-2h14zm0-4a1 1 0 110 2H3a1 1 0 110-2h14zm0-4a1 1 0 110 2H3a1 1 0 010-2h14zm0-4a1 1 0 110 2H3a1 1 0 010-2h14z",
		viewBox: "0 0 20 20",
	},
	arrowDown: {
		path:
			"M16.707 7.707l-6 6a.999.999 0 01-1.414 0l-6-6a.999.999 0 111.414-1.414L10 11.586l5.293-5.293a.999.999 0 111.414 1.414z",
		viewBox: "0 0 20 20",
	},
	arrowRight: {
		path:
			"M12.4818 9.99982L5.34175 16.2468C4.92575 16.6108 4.88375 17.2428 5.24775 17.6578C5.61175 18.0738 6.24375 18.1158 6.65875 17.7528L14.6587 10.7518C15.1138 10.3538 15.1138 9.64582 14.6587 9.24782L6.65875 2.24782C6.24375 1.88382 5.61175 1.92582 5.24775 2.34082C4.88375 2.75682 4.92575 3.38882 5.34175 3.75182L12.4818 9.99982Z",
		viewBox: "0 0 20 20",
	},
};

export { IconSet };
