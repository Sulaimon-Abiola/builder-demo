<template lang="">
	<div>
		<input
			type="text"
			:placeholder="placeholder || ''"
			:defaultValue="defaultValue || ''"
			@input="$emit('inputchange', $event.target.value)"
			class="h-12 w-full border border-[#babbbd] rounded px-3 outline-none focus:border-[#111111]"
		/>
	</div>
</template>

<script setup>
	defineProps(['defaultValue', 'placeholder'])
</script>

<style lang=""></style>
