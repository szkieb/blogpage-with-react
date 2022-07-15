import { SetStateAction, useState } from "react";
import { blogContent } from "../assets/BlogPostDatabase";

type ButtonProps = { fufu: React.Dispatch<SetStateAction<number>> };

export function ButtonLeft({ fufu }: ButtonProps) {
	return (
		<>
			<button
				onClick={() => {
					fufu((old) => {
						if (old > 0) {
							console.log("old" + old);
							return old - 1;
						} else {
							return old;
						}
					});
				}}
				className="self-center pr-6 "
			>
				<svg
					className="h-12"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
					<path d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z" />
				</svg>
			</button>
		</>
	);
}

export function ButtonRight({ fufu }: ButtonProps) {
	return (
		<>
			<button
				onClick={() => {
					fufu((old) => {
						if (old < blogContent.length - 1) {
							return old + 1;
						} else {
							return old;
						}
					});
				}}
				className="self-center pl-6 "
			>
				<svg
					className="h-12"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					{/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
					<path d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z" />
				</svg>
			</button>
		</>
	);
}
