<template>
<div>
<h1 style="text-align: center">A blank nuxtjs project application</h1>
<select>
<option>Hello</option>
<option>world</option>
</select>

<div>
 <center>
  <form action="/api/posts" method="GET">
    <label for="searchField">Search data</label>
    <input type="text" name="search" placeholder="search data from here">
    <input type="submit" name="submit" value="GET DATA">
  </form>

  <input type="text" name="searchData" placeholder="search data">
  <button id="searchButton">search data</button>
 </center>
</div>
</div>
</template>
