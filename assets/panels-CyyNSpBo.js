const e=`# Panels

Panels is for comics. It lays the chapter out as pages of panels, so you can see how it reads before anyone draws it. Novels and screenplays do not have it.

Open it from **Panels** on the rail. It shows the chapter you last had open.

## Pages and panels

The page tabs along the top step through the pages. **Add page** adds one, and **Delete page** removes the one you are on. A deleted page or panel can be brought back with **Undo** for a few seconds.

The tools:

- **Select:** click a panel to select it, drag it to move it, and drag its corners to resize it.
- **Draw:** drag across the page to sketch a panel border.
- **Line:** click to place a panel's corners, for panels that are not rectangles. Click the first corner again, or press Enter, to close the shape.
- **Pencil** and **Eraser:** draw inside a panel, with a colour and a size.
- **Layouts:** replace the page's panels with a ready-made layout, such as a splash page or an L-shape.

With a panel selected, the arrow keys move it, **Shift** with the arrows moves it further, and **Alt** with the arrows resizes it.

## Panels and the script

Each panel is paired with a panel of the script. **Script** in the toolbar shows that script text on each panel. The side panel lists the script's panels on this page, says which already have a panel drawn, and **Add a panel for this** draws one for a panel that has none.

A panel is matched with the script by its place on the page until you assign it, and then it stays with the same script panel if the script changes.

## Seeing the page

- **Guides:** the trim line, where the page is cut, and the safe area, where anything important should stay.
- **Spread:** two pages side by side, the way a printed book opens.
- The reading direction, left to right or right to left, is set in Settings under **This story**.

## Exporting

**Export** saves the current page or both pages of a spread as a picture (PNG), every page as a folder of pictures, or every page as one PDF.
`;export{e as default};
