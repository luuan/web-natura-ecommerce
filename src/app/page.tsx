import Banner from "@/components/banner";
import Header from "@/components/template/header";
import Page from "@/components/template/index";
import Image from "next/image";


async function getProdutcs() {
  const res = await fetch(`http://localhost:3000/products`,{method: "GET"})
  
  return res.json()
}

export default async function Home(props: any) {
  const productsData = await getProdutcs()

  const formatNumber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 })

  
  return (
      <Page>
        <section  id='banner'>
          <Banner />
        </section>
        <section id='products'>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-[30px] tracking-tight text-gray-90 font-extrabold self-center">descubra as fragrâncias que combinam com você</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {productsData.map((product: any) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      width={200}
                      height={200}
                      alt=""
                      src={product.url}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 justify-between">
                    <h3 className="text-md font-extrabold text-black">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="text-lg font-extrabold text-gray-900">{formatNumber.format(product.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>
      </Page>
  )
}