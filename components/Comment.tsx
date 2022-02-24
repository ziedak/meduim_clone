import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Iform {
	id: string;
	name: string;
	email: string;
	comment: string;
}
const Comment: React.FC<{ idPost: number }> = ({ idPost }) => {
	const [submitted, setSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit(async (data) => {
		console.log('data', data);

		await fetch('/api/createComment', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('data', data);
				setSubmitted(true);
			})
			.catch((err) => {
				console.log('err', err);
				setSubmitted(false);
			});
	});

	return (
		<>
			{submitted ? (
				<div className="my-10 mx-auto max-w-2xl bg-yellow-500 p-10 text-white">
					<h3 className="text-2xl font-bold">
						Thank you form submitting your comment !
					</h3>
					<p>Once it has been approvec, it will appear below!</p>
				</div>
			) : (
				<form
					onSubmit={onSubmit}
					className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
				>
					<h3 className="text-sm text-yellow-500">Enjoyed this article</h3>
					<h4 className="text-3xl font-bold">Leave a comment below!</h4>
					<hr className="mt-2 py-3" />

					<input type="hidden" value={idPost} {...register('id')} />

					<label className="mb-5 block">
						<span className="text-gray-700">Name</span>
						<input
							{...register('name', { required: true })}
							className="form-input mt-1 block w-full rounded-lg border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
							type="text"
							placeholder="Zied Ak"
						/>
					</label>
					<label className="mb-5 block">
						<span className="text-gray-700">Email</span>
						<input
							{...register('email', { required: true })}
							className="form-input mt-1 block w-full rounded-lg border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
							type="text"
							placeholder="ziedakremi@gmail.com"
						/>
					</label>
					<label className="mb-5 block">
						<span className="text-gray-700">Comment</span>
						<textarea
							{...register('comment', { required: true })}
							className="form-input mt-1 block w-full rounded-lg border py-2 px-3 shadow outline-none ring-yellow-500  focus:ring"
							rows={8}
						/>
					</label>
					{/* validation fields */}
					<div className="flex flex-col p-5">
						{errors.name && (
							<span className="text-red-500">
								{' '}
								- the Name field is required
							</span>
						)}
						{errors.email && (
							<span className="text-red-500">
								{' '}
								- the Email field is required
							</span>
						)}
						{errors.comment && (
							<span className="text-red-500">
								{' '}
								- the Comment field is required
							</span>
						)}
					</div>
					<input
						type="submit"
						className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
					/>
				</form>
			)}
		</>
	);
};

export default Comment;
