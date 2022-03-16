<?php

namespace App\Entity;

use App\Repository\BoatRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @apiResource(
 *     normalizationContext={"groups"={"boat:read"}},
 *     denormalizationContext={"groups"={"boat:write"}}
 * )
 *
 * @ORM\Entity(repositoryClass=BoatRepository::class)
 */
class Boat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"boat:read", "boat:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @Groups({"boat:read", "boat:write"})
     * @ORM\Column(type="text")
     */
    private $historic;

    /**
     * @Groups({"boat:read", "boat:write"})
     * @ORM\Column(type="integer")
     */
    private $state;

    /**
     * @Groups({"boat:read", "boat:write"})
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $state_text;

    /**
     * @Groups({"boat:read", "boat:write"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $audio;

    /**
     * @Groups({"boat:read", "boat:write"})
     * @ORM\Column(type="float")
     */
    private $lat;

    /**
     * @Groups({"boat:read", "boat:write"})
     * @ORM\Column(type="float")
     */
    private $lng;

    /**
     * @Groups({"boat:read"})
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="id_boat")
     */
    private $images;

    /**
     * @Groups({"boat:read"})
     * @ORM\OneToOne(targetEntity=Characteristics::class, mappedBy="id_boat", cascade={"persist", "remove"})
     */
    private $characteristics;

    /**
     * @Groups({"boat:read"})
     * @ORM\OneToMany(targetEntity=Visit::class, mappedBy="id_boat")
     */
    private $visits;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->visits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getHistoric(): ?string
    {
        return $this->historic;
    }

    public function setHistoric(string $historic): self
    {
        $this->historic = $historic;

        return $this;
    }

    public function getState(): ?int
    {
        return $this->state;
    }

    public function setState(int $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getState_Text(): ?string
    {
        return $this->state_text;
    }

    public function setState_Text(string $state_text): self
    {
        $this->state_text = $state_text;

        return $this;
    }

    public function getAudio(): ?string
    {
        return $this->audio;
    }

    public function setAudio(?string $audio): self
    {
        $this->audio = $audio;

        return $this;
    }

    public function getLat(): ?float
    {
        return $this->lat;
    }

    public function setLat(float $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLng(): ?float
    {
        return $this->lng;
    }

    public function setLng(float $lng): self
    {
        $this->lng = $lng;

        return $this;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }


    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getIdBoat() === $this) {
                $image->setIdBoat(null);
            }
        }

        return $this;
    }

    public function getCharacteristics(): ?Characteristics
    {
        return $this->characteristics;
    }
    /**
     * @return Collection<int, Visit>
     */
    public function getVisits(): Collection
    {
        return $this->visits;
    }

    public function removeVisit(Visit $visit): self
    {
        if ($this->visits->removeElement($visit)) {
            // set the owning side to null (unless already changed)
            if ($visit->getIdBoat() === $this) {
                $visit->setIdBoat(null);
            }
        }

        return $this;
    }
}