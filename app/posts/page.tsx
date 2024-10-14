import skData from "../../public/data/Data.json"; // Sesuaikan dengan path JSON
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface Skincare {
  IdProduk: number;
  NamaProduk: string;
  HargaModal: number;
  HargaJual: number;
  HargaDiskon: number;
  Stok: number;
}

const SkincareList = () => {
  const skins: Skincare[] = skData["Skincare"]; // Menggunakan notasi bracket

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {skins.map((skin) => (
        <CardList key={skin.IdProduk}>
          <p>{skin.NamaProduk}</p>
          <p>Harga Modal : {skin.HargaModal}</p>
          <p>Harga Jual : {skin.HargaJual}</p>
          <p>Harga Diskon : {skin.HargaDiskon}</p>
          <p>Stok : {skin.Stok}</p>
          <p></p>
          <ViewUserButton userId={skin.Stok} />
        </CardList>
      ))}
    </>
  );
};

export default SkincareList;
