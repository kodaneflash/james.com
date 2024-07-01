import { CloudinaryVideo } from './cloudinary-video.tsx'

type CloudinaryVideoProps = Parameters<typeof CloudinaryVideo>[0]

export function MissingSomething(
	props: Omit<CloudinaryVideoProps, 'cloudinaryId'>,
) {
	return (
		<CloudinaryVideo cloudinaryId="imaginify/misc/where_am_i" {...props} />
	)
}

export function Grimmacing(props: Omit<CloudinaryVideoProps, 'cloudinaryId'>) {
	return (
		<CloudinaryVideo cloudinaryId="imaginify/misc/grimmace" {...props} />
	)
}

export function Facepalm(props: Omit<CloudinaryVideoProps, 'cloudinaryId'>) {
	return (
		<CloudinaryVideo cloudinaryId="imaginify/misc/facepalm" {...props} />
	)
}
