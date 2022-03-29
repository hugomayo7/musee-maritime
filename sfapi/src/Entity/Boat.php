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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $stateText;

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
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="boat")
     */
    private $images;

    /**
     * @Groups({"boat:read"})
     * @ORM\OneToOne(targetEntity=Characteristics::class, mappedBy="boat", cascade={"persist", "remove"})
     */
    private $characteristics;

    /**
     * @Groups({"boat:read"})
     * @ORM\OneToMany(targetEntity=Visit::class, mappedBy="boat")
     */
    private $visits;

    /**
     * @Groups({"boat:read",  "boat:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @Groups({"boat:read",  "boat:write"})
     * @ORM\OneToMany(targetEntity=Audio::class, mappedBy="boat", orphanRemoval=true)
     */
    private $audio;

    /**
     * @Groups({"boat:read",  "boat:write"})
     * @ORM\OneToMany(targetEntity=Text::class, mappedBy="boat", orphanRemoval=true)
     */
    private $texts;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->visits = new ArrayCollection();
        $this->audio = new ArrayCollection();
        $this->texts = new ArrayCollection();
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

    public function getStateText(): ?string
    {
        return $this->stateText;
    }

    public function setStateText(string $stateText): self
    {
        $this->stateText = $stateText;

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
            if ($image->getBoat() === $this) {
                $image->setBoat(null);
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
            if ($visit->getBoat() === $this) {
                $visit->setBoat(null);
            }
        }

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * @return Collection<int, Audio>
     */
    public function getAudio(): Collection
    {
        return $this->audio;
    }

    public function addAudio(Audio $audio): self
    {
        if (!$this->audio->contains($audio)) {
            $this->audio[] = $audio;
            $audio->setBoat($this);
        }

        return $this;
    }

    public function removeAudio(Audio $audio): self
    {
        if ($this->audio->removeElement($audio)) {
            // set the owning side to null (unless already changed)
            if ($audio->getBoat() === $this) {
                $audio->setBoat(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Text>
     */
    public function getTexts(): Collection
    {
        return $this->texts;
    }

    public function addText(Text $text): self
    {
        if (!$this->texts->contains($text)) {
            $this->texts[] = $text;
            $text->setBoat($this);
        }

        return $this;
    }

    public function removeText(Text $text): self
    {
        if ($this->texts->removeElement($text)) {
            // set the owning side to null (unless already changed)
            if ($text->getBoat() === $this) {
                $text->setBoat(null);
            }
        }

        return $this;
    }
}