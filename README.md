# Zwallet Frontend (With Next Js)

<div style="text-align:center;position:relative; bottom:43px;margin-top:50px;" align="center">

<img src='./src/assets/img/Zwallet.png' width='auto' />

[![next](https://img.shields.io/npm/v/next?label=next)](https://nextjs.org)
[![react](https://img.shields.io/npm/v/react?label=react)](https://reactjs.org)
[![react-bootstrap](https://img.shields.io/npm/v/react-bootstrap?label=react-bootstrap)](https://react-bootstrap.github.io/getting-started/introduction)
[![redux](https://img.shields.io/npm/v/redux?label=redux)](https://www.npmjs.com/package/redux)
[![react-redux](https://img.shields.io/npm/v/react-redux?label=react-redux)](https://www.npmjs.com/package/react-redux)
[![Redux-promise-middleware](https://img.shields.io/npm/v/redux-promise-middleware?label=redux-promise-middleware)](https://www.npmjs.com/package/redux-promise-middleware)
[![axios](https://img.shields.io/badge/axios-0.24.0-blue)](https://www.npmjs.com/package/axios)
[![Bootstrap](https://img.shields.io/npm/v/bootstrap?label=bootstrap)](https://www.npmjs.com/package/bootstrap)
[![sweetalert2](https://img.shields.io/npm/v/sweetalert2?label=sweetalert2)](https://www.npmjs.com/package/sweetalert2)
[![echarts-for-react](https://img.shields.io/npm/v/echarts-for-react?label=echarts-for-react)](https://www.npmjs.com/package/echarts-for-react)

Zwallet is a digital wallet service for deposits and transfers. Using javascript, html, css, and the Next js framework

</div>

# Features

## There are several features of this API and End Point, as below :

### Public
<ul>
<li>Register</li>
<li>Login</li>
<li>Forgot Password</li>
</ul>

### Private
<ul>
<li>Top up</li>
<li>Transfer</li>
<li>Change Account Informations</li>
</ul>

#  How to Run the Application

## 1. Clone Repository

### Clone this repository by running the following command :

```
git clone https://github.com/Hazgn/zwallet-next.git
```

## 2 Install dependencies Package

### Install the dependencies package inside the application folder by running this command :

```
npm install
```

OR

```
npm i
```

## 3 Setups Project

<li>Setups Environment File</li>
<p>
Create file name .env.local on the folder project
Create an .env.local file name in the project folder, then fill in the variables like this :
</p>

<table>
<tr>
<td>NEXT_PUBLIC_HOST</td>
<td>https://zwalet.herokuapp.com if error migrate to https://fazzpay.herokuapp.com</td>
</tr>
<tr>
<td>NEXT_PUBLIC_IMAGE_USER</td>
<td>https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449</td>
</tr>
<tr>
<td>NEXT_PUBLIC_RESET_PASSWORD</td>
<td>http://localhost:3000/reset-password or your ipv4/virtual host, example : http://192.168.56.258:3000/reset-password</td>
</tr>
</table>

## 4 Run Project
Run the app in development mode after server/backend is running. with a command like the following :

```
npm run dev
```

Open http://localhost:3000 in your browser after project is running.

# Deployment

### `example of this project` <https://zwallet-nextjs.vercel.app>