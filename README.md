# adapt-simple-table  


**SimpleTable** is a *presentation component* and an extended text comopnent with capability to display text in a table. By adding some attributes in JSON, developer can create table without muddle themself using markup tags. 

<img src="sample/adapt-simple-table.png" alt="sample table component" align="right" width="50%">

**SimpleTable**'s simple purpose is to present text along with table. The text inside table may include HTML.

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `simple-table`.

**_classes** (string): CSS class name to be applied to **SimpleTable**’s containing `div`. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`.  

**title** (string): A reference title for the component. **title** is distinct from the **displayTitle** which, if present, appears above the component. **title** provides the opportunity to use a shortened form in tighter spaces, such as in menus or in the drawer.  

**displayTitle** (string): Optional text that will display as a title or header above the component. It can be used as a headline.   

**instruction** (string): This optional text appears above the component. It is frequently used to
guide the learner’s interaction with the component.

**body** (string): Although optional, this text constitutes what is thought of as the primary *simple-table* of the **SimpleTable** component. HTML is permitted.

**_items** (string): Specific for *SimpleTable* component. Add it for table.

**_header** (string): Header cell.

**_cells** (string): Table cells.

**text** (string): Table cell/header text.

<div float align=right><a href="#top">Back to Top</a></div>

## Limitations

No known limitations.   


----------------------------
**Version number:**  0.0.1 
**Framework versions:** 2+  
**Author / maintainer:** Kunj kunjsharma@hotmail.com  
**Accessibility support:** WAI AA   
**RTL support:** yes
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari iOS 9+10, Safari OS X 9+10, Opera    
