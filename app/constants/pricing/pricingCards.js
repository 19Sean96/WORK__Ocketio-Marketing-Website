export default [
	{
		name: "starter",
		price: "free",
		message:
			"Take the core capabilities of the Essentials tier for a test drive!",
		features: [
			[
				"Up to 2 users",
				"Up to 5 devices / user",
				"Up to 2 networks",
				"1 gateway / network",
				"1 identity provider integration",
			],
			[
				"Basic DNS settings",
				"Centralized settings and configuration management",
				"Configurable device validation and key rotation",
				"Event monitoring for networks, gateways and devices",
			],
		],
		button: {
			url: "#",
			className: "btn--filled",
			value: "get started",
		},
	},
	{
		name: "essentials",
		price: "$4",
		message:
			"All the essential capabilities for providing secure access to network resources at any scale",
		features: [
			[
				"Unlimited users",
				"Up to 5 devices / user",
				"Up to 2 networks",
				"Up to 2 gateways / network",
				"Up to 10 resources / network",
				"1 identity provider integration",
			],
			["ACL enforcement of basic access policies"],
		],
		button: {
			url: "#",
			className: "btn--bordered",
			value: "get started",
		},
	},
];
