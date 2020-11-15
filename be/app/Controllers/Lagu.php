<?php 
namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;

class Lagu extends ResourceController
{
    protected $modelName = "App\Models\LaguModel";
    protected $format = "json";

    private $limit = 20;
    private function getOffset($page)
    {
        $offset = ($page-1)*$this->limit;
        return $offset;
    }
    private function getPageCount($countData)
    {
        $pageCount = ceil($countData/$this->limit);
        return $pageCount;
    }

    public function getAllLagu($page=1)
    {
        $songs = $this->model->findAll($this->limit, $this->getOffset($page));
        $countData = $this->model->countAll();
        $page = (int)$page;
        $pageCount = $this->getPageCount($countData);

        $data = [
            "page" => $page,
            "perpage" => $this->limit,
            "pageCount" => $pageCount,
            "count" => $countData,
            "songs" => $songs
        ];
        return $this->respond($data);
    }
    public function getLaguByAbjad($abjad, $page=1)
    {
        $songs = $this->model->like("judul", $abjad, 'after')->findAll($this->limit, $this->getOffset($page));
        $countData = $this->model->like("judul", $abjad, 'after')->countAllResults();
        $page = (int)$page;
        $pageCount = $this->getPageCount($countData);

        $data = [
            "page" => $page,
            "perpage" => $this->limit,
            "pageCount" => $pageCount,
            "count" => $countData,
            "songs" => $songs
        ];
        return $this->respond($data);
    }

    public function getLaguByArtist($artist, $page=1)
    {
        $songs = $this->model->where('penyanyi', $artist)->findAll($this->limit, $this->getOffset($page));
        $countData = $this->model->where('penyanyi', $artist)->countAllResults();
        $page = (int)$page;
        $pageCount = $this->getPageCount($countData);

        $data = [
            "page" => $page,
            "perpage" => $this->limit,
            "pageCount" => $pageCount,
            "count" => $countData,
            "songs" => $songs
        ];
        return $this->respond($data);
    }

    public function getAllArtist($page=1)
    {
        $artists = $this->model->getAllArtist($this->limit, $this->getOffset($page));
        $countData = $this->model->countArtist();
        $page = (int)$page;
        $pageCount = $this->getPageCount($countData);

        $data = [
            "page" => $page,
            "perpage" => $this->limit,
            "pageCount" => $pageCount,
            "count" => $countData,
            "artists" => $artists
        ];
        return $this->respond($data);
    }

    public function getArtistsByAbjad($abjad, $page=1)
    {
        $artists = $this->model->getArtistsByAbjad($abjad, $this->limit, $this->getOffset($page));
        $countData = $this->model->countArtistsByAbjad($abjad);
        $page = (int)$page;
        $pageCount = $this->getPageCount($countData);

        $data = [
            "page" => $page,
            "perpage" => $this->limit,
            "pageCount" => $pageCount,
            "count" => $countData,
            "artists" => $artists
        ];
        return $this->respond($data);
    }

    public function getLaguById($id)
    {
        $song = $this->model->find($id);
        return $this->respond($song);
    }
}