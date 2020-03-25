<template>
  <div id="app">
    <main id="main">
      <transition name="fade">
        <router-view :key="$route.fullPath" />
      </transition>
    </main>
  </div>
</template>



