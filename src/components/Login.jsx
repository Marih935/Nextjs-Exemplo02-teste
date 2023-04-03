import React from 'react';

function Login() {
  return (
    <div className="border-2 bg-branco border-gray-300 rounded-lg h-full w-full sm:h-auto sm:w-80 md:w-96 p-8">
      <div>
        <img
          className="mx-auto h-32 w-auto"
          src="/img/logo.png"
          alt="OK"
        />
        <img
          className="mx-auto h-auto w-auto"
          src="/img/mouratech.png"
          alt="OK"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-preto">
          Entre com sua conta
        </h2>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-azul2 sm:text-sm sm:leading-6 px-2"
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-azul2 sm:text-sm sm:leading-6 px-2"
              placeholder="Senha"
            />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="text-sm">
            <a href="/" className="font-medium text-azul hover:text-azul/70">
              Esqueceu sua senha?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-azul py-2 px-3 text-sm font-semibold text-white hover:bg-azul/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul cursor-pointer"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;